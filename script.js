const new_arr=JSON.parse(localStorage.getItem("0"));

if(new_arr!=null)
{
    for(var i=0;i<new_arr.length;i++)
    {
        const div=document.createElement("div");
        div.id="task";

         let st=new_arr[i];
         let code=st[0];
         
        div.innerHTML=`<h4 style="border-bottom:3px solid black;" id="${i}">${st.substring(1,st.length)}</h4> 
        <div class="controls">
           <input style="width:40px; height:40px"type="checkbox" onclick="t_complete(this,${i})" id=${i}b>
           <button style="width:40px; height:40px" onclick="edit(${i})">Edit</button>
           <button style="width:40px; height:40px" onclick="delete_task(${i})"> X </button > 
        </div>`

          const l=document.getElementById("left2");
          l.appendChild(div);   
                 
        if(code=='c')
         {
            document.getElementById(`${i}`).style.textDecoration="line-through";
            document.getElementById(`${i}b`).checked=true;
         }
    }
}

function add_data()
{  
      
    if(event.keyCode==13)
    {  
        let str=document.getElementById("tarea").value;
        let flag=0;
        for(let i=0;i<str.length;i++)
            {  
                if(str[i]!=" ")
                { flag=1;
                  break;
                }
            }  
        
        if(flag==1)
        {
          str='u'+str;
          let arr=JSON.parse(localStorage.getItem("0")) 
         
          if(arr==null)
          arr=[]
          arr.push(str)
    
          localStorage.setItem('0', JSON.stringify(arr));   
        
          document.getElementById("tarea").value=null;
          location.reload();
        }
        else
        {   document.getElementById("tarea").value='';
            alert("Please enter some data !");     
        }

    }
}

function delete_task(index){

    let arr=JSON.parse(localStorage.getItem("0")) 
    arr.splice(index,1);
    localStorage.setItem("0",JSON.stringify(arr));

    location.reload();
}

function edit(index){
    let arr=JSON.parse(localStorage.getItem("0")) 
    let st=arr[index]
    let v=prompt("Enter new text here !",st.substring(1,st.length));

    if(v!=null && v!="")
    { arr[index]=st[0]+v;

      localStorage.setItem("0",JSON.stringify(arr));
      location.reload();
    }
}

function t_complete(tag,index){
    
     if(tag.checked==true)
     {
        let arr=JSON.parse(localStorage.getItem("0")) 
        
        let st=arr[index];
                
        let nst="c";
        nst+=st.substring(1,st.length);
    
        arr[index]=nst;
        localStorage.setItem("0",JSON.stringify(arr));
     
         
     document.getElementById(`${index}`).style.textDecoration="line-through";
     }
     else{
        let arr=JSON.parse(localStorage.getItem("0")) 
        
        let st=arr[index];
                
        let nst="u";
        nst+=st.substring(1,st.length);
    
        arr[index]=nst;
        localStorage.setItem("0",JSON.stringify(arr));
        
        document.getElementById(`${index}`).style.textDecoration="none";
     }
}