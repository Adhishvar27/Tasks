const ListItems = document.getElementsByTagName('li');
for (let i = 0; i < ListItems.length; i++){
    ListItems[i].style.fontStyle = 'italic';
    if (i == 4) {
        ListItems[i].style.color = 'blue';
    }
}