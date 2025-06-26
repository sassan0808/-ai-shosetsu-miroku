#!/usr/bin/env node

/**
 * 自動章更新スクリプト
 * 
 * このスクリプトは個別の章ファイル（.md）から web-reader の script.js を自動更新します。
 * 
 * 使用方法:
 * node update-chapters.js
 */

const fs = require('fs');
const path = require('path');

// パス設定
const CHAPTERS_DIR = path.join(__dirname, '../novels/metas-awakening/chapters-v5-gemini');
const WEB_READER_DIR = __dirname;
const OUTPUT_FILE = path.join(WEB_READER_DIR, 'script.js');

// 章ファイルのマッピング
const CHAPTER_FILES = {
    1: 'chapter-01.md',
    2: 'chapter-02.md',
    3: 'chapter-03.md',
    4: 'chapter-04.md',
    5: 'chapter-05.md',
    6: 'chapter-06.md',
    7: 'chapter-07.md',
    8: 'chapter-08.md',
    9: 'chapter-09.md',
    10: 'chapter-10.md',
    11: 'chapter-11.md',
    12: 'chapter-12.md'
};

/**
 * Markdown を HTML に変換（簡易版）
 */
function markdownToHtml(markdown) {
    return markdown
        .replace(/^### (.+)$/gm, '<h4>$1</h4>')
        .replace(/^## (.+)$/gm, '<h3>$1</h3>')
        .split('\n')
        .map(line => {
            if (line.trim() === '') return '';
            if (line.match(/^<h[34]>/)) return `            ${line}`;
            return `            <p>${line}</p>`;
        })
        .join('\n');
}

/**
 * 章ファイルを読み込んで HTML に変換
 */
function loadChapter(chapterNum) {
    const filename = CHAPTER_FILES[chapterNum];
    const filepath = path.join(CHAPTERS_DIR, filename);
    
    try {
        const rawContent = fs.readFileSync(filepath, 'utf8');
        
        const titleMatch = rawContent.match(/^# (.+)/m);
        const title = titleMatch ? titleMatch[1] : `第${chapterNum}章`;
        
        const bodyContent = rawContent.replace(/^# .+\r?\n/, '');
        
        const htmlContent = markdownToHtml(bodyContent);
        
        return {
            title: title,
            content: htmlContent
        };
    } catch (error) {
        console.error(`Error loading chapter ${chapterNum}: ${error.message}`);
        return {
            title: `第${chapterNum}章`,
            content: '<p>章の読み込みエラーが発生しました。</p>'
        };
    }
}

/**
 * JavaScript ファイルのテンプレートを生成
 */
function generateJavaScript(chapters) {
    const chaptersJson = JSON.stringify(chapters, null, 4);

    return `// チャプター管理
let currentChapter = 1;
const totalChapters = 12;

// DOM要素の取得
const tabButtons = document.querySelectorAll('.tab-button');
const chapterContents = document.querySelectorAll('.chapter-content');
const prevButton = document.getElementById('prev-chapter');
const nextButton = document.getElementById('next-chapter');
const chapterInfo = document.getElementById('chapter-info');

// チャプターデータ（個別ファイルから自動生成）
const chapters = ${chaptersJson};

// 初期化
function init() {
    switchToChapter(1);
    
    // イベントリスナーの設定
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const chapterNum = parseInt(button.dataset.chapter);
            switchToChapter(chapterNum);
        });
    });
    
    prevButton.addEventListener('click', () => {
        if (currentChapter > 1) switchToChapter(currentChapter - 1);
    });
    
    nextButton.addEventListener('click', () => {
        if (currentChapter < totalChapters) switchToChapter(currentChapter + 1);
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentChapter > 1) switchToChapter(currentChapter - 1);
        if (e.key === 'ArrowRight' && currentChapter < totalChapters) switchToChapter(currentChapter + 1);
    });
}

// チャプター切り替え
function switchToChapter(chapterNum) {
    if (chapterNum < 1 || chapterNum > totalChapters) return;
    
    currentChapter = chapterNum;

    tabButtons.forEach(btn => btn.classList.toggle('active', parseInt(btn.dataset.chapter) === chapterNum));
    chapterContents.forEach(content => content.style.display = 'none');
    
    const targetContent = document.getElementById('chapter-' + chapterNum);
    if (targetContent) {
        targetContent.style.display = 'block';
        loadChapterContent(chapterNum);
    }
    
    updateChapterInfo();
    updateNavigationButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// チャプター情報の更新
function updateChapterInfo() {
    chapterInfo.textContent = '第' + currentChapter + '章 / 全' + totalChapters + '章';
}

// ナビゲーションボタンの状態更新
function updateNavigationButtons() {
    prevButton.disabled = currentChapter === 1;
    nextButton.disabled = currentChapter === totalChapters;
}

// チャプターコンテンツの読み込み
function loadChapterContent(chapterNum) {
    const chapterData = chapters[chapterNum];
    if (!chapterData) return;

    const chapterArticle = document.getElementById('chapter-' + chapterNum);
    if (!chapterArticle) return;

    const titleElement = chapterArticle.querySelector('h2');
    const contentElement = chapterArticle.querySelector('.chapter-text');

    if (titleElement) titleElement.textContent = chapterData.title;
    if (contentElement) contentElement.innerHTML = chapterData.content;
}

// 初期化実行
document.addEventListener('DOMContentLoaded', init);

/* 
 * このファイルは update-chapters.js により自動生成されました。
 * 手動で編集せず、章ファイルを更新後にスクリプトを実行してください。
 */`;
}

/**
 * メイン処理
 */
function main() {
    console.log('章ファイルから web-reader 用 JavaScript を生成中...');
    
    const chapters = {};
    for (let i = 1; i <= 12; i++) {
        console.log(`第${i}章を読み込み中...`);
        chapters[i] = loadChapter(i);
    }
    
    const jsContent = generateJavaScript(chapters);
    
    try {
        fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf8');
        console.log(`✅ JavaScript ファイルが正常に生成されました: ${OUTPUT_FILE}`);
        console.log('\n📖 web-reader でブラウザを更新して変更を確認してください');
    } catch (error) {
        console.error(`❌ ファイル書き出しエラー: ${error.message}`);
        process.exit(1);
    }
}

// スクリプト実行
if (require.main === module) {
    main();
}

module.exports = {
    loadChapter,
    markdownToHtml,
    generateJavaScript
};