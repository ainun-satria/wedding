const sheetID = '1JiLt2yI2DlZEJzZPa_63O11Sg88ABVjYBz5FCC7bL50';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'tamu';
const query = encodeURIComponent('Select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];

document.addEventListener('DOMContentLoaded', init);

const output = document.querySelector('.output');
 
function init() {
    console.log('ready');

 
    
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            data.length = 0;  
            output.innerHTML = ""; 

            const jsData = JSON.parse(rep.substring(47).slice(0, -2));

            const colz = [];
                            
            jsData.table.cols.forEach((heading) => {
                if(heading.label){
                    colz.push(heading.label.toLowerCase());
                }
                // console.log(colz)
            });
            
            
            jsData.table.rows.forEach((main) =>{
           
                const row = {};
               
                colz.forEach((ele, ind)=>{
                  
                    
                    row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
                    // console.log(row)
                })
                console.log(row)
                
                data.push(row);
                
               
            })
            maker(data);
        });
    
}

function maker(json){

    json.forEach((el)=>{
        const div = document.createElement('div');
        div.classList.add('card', 'mt-3','mx-auto');
        output.append(div);
        const keys = Object.keys(el);

        keys.forEach(
            (key) => {
                const value = el[key];
                // console.log(value)
                const ele = document.createElement('p');
                if (key === 'nama'){
                    ele.classList.add('card-header', 'tebal');
                    ele.textContent = value;
                    div.append(ele);
                }
                if (key === 'ucapan'){
                    const komenAnak = document.createElement('p');
                    komenAnak.textContent = `\u201C${value}\u201D`;
                    komenAnak.classList.add('miring');
                    div.append(komenAnak);
                }
            }
        )
    })
}