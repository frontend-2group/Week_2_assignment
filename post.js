const mockPosts = Array(6)
    .fill()
    .map((_, i) => ({
        rank: i + 1,
        ID: Math.floor(Math.random() * 1000),
        type: `cream ${i + 1}`,
        title: `example - ${i + 1}`,
        content: `content - ${i + 1}`,
        price: Math.floor(Math.random() * 50000),
    }));
// console.log(mockPosts);

const $idDom = document.getElementById("list");

// console.log($idDom);

list.innerHTML +=
    "<th>`${mock}`</th><th>[mockPosts.ID]</th><th>`[mockPosts.type]`</th>";

//id=list 태그안에 목포스트 값을 차례로 넣고 싶은데
//일단 innerHTML에서 여러 가지 요소 들어가는 방법..?
//--> 저렇게 한줄로 써야하는데.. 저게 맞나..???
//또다른 문제.. 목포스트 안에 벨류값들이 들어가야 하는데.. 모두 [mockPsots.ID] 이런식으로 글자 자체가 출력됨
//아 맘같지 않다...............쉽지않아....하나도 마음대로 되는게 없네...허허....

//아.. 된다고 해도 tr*6개 해야되는데..?
//처음부터 틀린건가보다....
