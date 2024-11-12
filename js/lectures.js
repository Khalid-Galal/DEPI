const lectureData = [
    {
        week: "Week 1",
        lectures: [
            { 
                type: "Video", 
                url: "https://itccollegprot039-my.sharepoint.com/:v:/g/personal/ghr66_itccollegprot039_onmicrosoft_com/EXo3ZUvYh7hBmKG_9yiAW8QByNvmmIvHbku5WFmK7mRnbA?e=rZsGom", 
                label: "Lecture 1 (Video)", 
                category: "Technical" 
            },
            { 
                type: "PDF", 
                url: "https://drive.google.com/file/d/1enJHMwU8ADjEcnywQOxXVKScENeDuNBG/view?usp=drivesdk", 
                label: "Lecture 1 (PDF)", 
                category: "Technical" 
            },
            { 
                type: "Video", 
                url: "https://itccollegprot039-my.sharepoint.com/personal/ghr66_itccollegprot039_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fghr66%5Fitccollegprot039%5Fonmicrosoft%5Fcom%2FDocuments%2FRecordings%2FVulnerability%20Analyst%20%20Penetration%20Tester%20%2D%20GLB%20%2D%20CAI2%5FISS3%5FG1%20%2D%203H%2D20241026%5F152944%2DMeeting%20Recording%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ec717bc2a%2D5faa%2D4230%2D9fad%2Daee5ff51a3f7", 
                label: "Lecture 2 (Video)", 
                category: "Non-Technical" 
            },
            { 
                type: "PDF", 
                url: "#", 
                label: "Lecture 2 (PDF)", 
                category: "Non-Technical" 
            }
        ]
    },
    {
        week: "Week 2",
        lectures: [
            { 
                type: "Video", 
                url: "https://itccollegprot039-my.sharepoint.com/:v:/g/personal/ghr66_itccollegprot039_onmicrosoft_com/EZxc8-JPByhDr7v0BBwIc9IBVCwxJoXeUjGRASYhslV6Mw?e=ChY35w&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D", 
                label: "Lecture 3 (Video)", 
                category: "Technical" 
            },
            { 
                type: "PDF", 
                url: "https://drive.google.com/file/d/1vLC3D9ygCuZCYK0XZ3iGvnJp2-8CjwjL/view?usp=drivesdk", 
                label: "Lecture 3 (PDF)", 
                category: "Technical" 
            },
            { 
                type: "Video", 
                url: "#", 
                label: "Lecture 4 (Video)", 
                category: "Technical" 
            },
            { 
                type: "PDF", 
                url: "https://drive.google.com/file/d/16U6K4k7zxrpvxtEgWGng4zJpm3BKD6lH/view?usp=drivesdk", 
                label: "Lecture 4 (PDF)", 
                category: "Technical" 
            },
            { 
                type: "Video", 
                url: "https://vimeo.com/1025706622/8ff0c1cf57?share=copy", 
                label: "Lecture 5 (Video)", 
                category: "Non-Technical" 
            },
            { 
                type: "PDF", 
                url: "#", 
                label: "Lecture 5 (PDF)", 
                category: "Non-Technical" 
            }
        ]
    },
    {
        week: "Week 3",
        lectures: [
            { 
                type: "Video", 
                url: "https://itccollegprot039-my.sharepoint.com/:v:/g/personal/ghr66_itccollegprot039_onmicrosoft_com/EeBY2DtiHulFjPeV8Xr_JhQBeI_JAvL3lo5TXYEtuln1Fw?e=m6hfoR&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D", 
                label: "Lecture 6 (Video)", 
                category: "Technical" 
            },
            { 
                type: "PDF", 
                url: "https://drive.google.com/file/d/1h0x-VD9zwYS8uCR9YgenufLRBdyudEOU/view?usp=drivesdk", 
                label: "Lecture 6 (PDF)", 
                category: "Technical" 
            },
            { 
                type: "Video", 
                url: "https://itccollegprot039-my.sharepoint.com/:v:/g/personal/ghr66_itccollegprot039_onmicrosoft_com/EXD18Fd76dxGpfCVoxSNYOwB-C348MVN1sEuUUb1d8Dl1A?e=JI8B6L&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D", 
                label: "Lecture 7 (Video)", 
                category: "Technical" 
            },
            { 
                type: "PDF", 
                url: "https://drive.google.com/file/d/1hvOdp9Mmb0R38SGJdtTJQzQ4Gm-UTwg9/view?usp=drivesdk", 
                label: "Lecture 7 (PDF)", 
                category: "Technical" 
            },
            { 
                type: "PDF", 
                url: "https://drive.google.com/file/d/1VYKYfT-_n6LI2nuxoV1GwJcTT8WEDzVl/view?usp=drivesdk", 
                label: "Lecture 7 (PDF)", 
                category: "Technical" 
            }
        ]
    },
    // Add more weeks as needed
];
