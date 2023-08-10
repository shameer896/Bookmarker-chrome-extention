let link = []
const textel = document.getElementById("text-el")
const saveel = document.getElementById("save-el")
const ulel = document.getElementById("ul-el")
const deleteel = document.getElementById("delete-el")
const tabel = document.getElementById("tab-el")
const localList = JSON.parse(localStorage.getItem("Link"))

deleteel.addEventListener("dblclick", function () {
    localStorage.clear()
    link = []
    ulel.innerHTML = ""
})
tabel.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        link.push(tabs[0].url)
        localStorage.setItem("Link", JSON.stringify(link))
        render()
    })
})


if (localList) {
    link = localList
    render()
}

saveel.addEventListener("click", function () {
    link.push(textel.value)
    textel.value = ""
    localStorage.setItem("Link", JSON.stringify(link))
    render()
})
function render() {
    let str = ""
    for (let i = 0; i < link.length; i += 1) {
        str += `<li>
        <a href=${link[i]} target='_blank'>${link[i]}</a>
        </li>`
    }
    ulel.innerHTML = str
}