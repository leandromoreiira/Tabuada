function gerar()
{
    var num = document.getElementById('ent')
    var tab = document.getElementById('seltab')
    

if(num.value.length == 0)
{
    window.alert('Por Favor , digite um número " ')
}else
{
    var n = Number(num.value)
    var c = 1
    tab.innerHTML = ''
    while(c<=10)
    {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }


}



    let num = [5,8,4]


















}