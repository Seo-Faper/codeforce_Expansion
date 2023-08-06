// Ctrl + C 조합 감지 이벤트 핸들러
function handleCopyEvent(event) {
    if (event.ctrlKey && event.key === 'c') {
        console.log("??");
        // 클립보드의 텍스트를 가져와서 개행을 제거한 후 출력
        navigator.clipboard.readText()
            .then(clipboardText => {
                let textWithoutNewlines = clipboardText.replace(/(\r\n|\r|\n)/g, " ");
                textWithoutNewlines = textWithoutNewlines.replace(".", ".\n");
                console.log("Clipboard content without newlines:", textWithoutNewlines);

                // 변경된 텍스트를 클립보드에 다시 복사
                navigator.clipboard.writeText(textWithoutNewlines)
                    .then(() => {
                        console.log("Modified content copied to clipboard.");
                    })
                    .catch(error => {
                        console.error("Error copying modified content:", error);
                    });
            })
            .catch(error => {
                console.error("Error reading clipboard content:", error);
            });
    }
}

// 키보드 이벤트 리스너 등록
document.addEventListener("keydown", handleCopyEvent);
