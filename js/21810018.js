const API = 'https://web1-api.vercel.app/api';

async function loadData(request,templateId,viewId){
    const response = await fetch(`${API}/${request}`);
    const data = await response.json();
    //console.log(data);

    let source = document.getElementById(templateId).innerHTML;
    let template = Handlebars.compile(source);
    //var context = {data : data};
    let view = document.getElementById(viewId);
    view.innerHTML = template({data:data});
    //console.log(html);
}