const listData = [
    {
        "id": 1,
        "boardNo": 1,
        "title": "이건 제목이야",
        "content": "이건 내용이야",
        "writer": "이건 작성자야",
        "date": "2023-06-23"
    },
    {
        "id": 2,
        "boardNo": 2,
        "title": "이것도 제목이야",
        "content": "이것도 내용이야",
        "writer": "이것도 작성자야",
        "date": "2023-06-22"
    },
    {
        "id": 3,
        "boardNo": 3,
        "title": "그것도 제목이야",
        "content": "그것도 내용이야",
        "writer": "그것도 작성자야",
        "date": "2023-06-21"
    },
    {
        "id": 4,
        "boardNo": 4,
        "title": "저것도 제목이야",
        "content": "저것도 내용이야",
        "writer": "저것도 작성자야",
        "date": "2023-06-20"
    }
]

function list() {
    const list = document.getElementById('list')

    let html = ''
    listData.forEach(function(data) {
        html += `<tr>
            <td>${data.boardNo}</td>
            <td>${data.title}</td>
            <td>${data.content}</td>
            <td>${data.writer}</td>
            <td>${data.date}</td>
            </tr>`
    })

    list.innerHTML = html
}

(function(){
    list()
})()