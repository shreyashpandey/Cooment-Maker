 let movies=[];
alert("Hello");
var i=1;
var k=-1;
var j=-1;
function a(id)
{
    
    var movie={
        text:document.getElementById(id).value,
        id:id,
        pos:50,
        callback:[]
    };
    k++;
    j++;
    movies.push(movie);
    //k=movies.length-1;
    console.log(movies[k]);
    var a=document.createElement("div");
    var p=document.createElement("p");
    p.innerHTML=movie.text;
    var a1=document.createElement("a");
    a1.innerHTML="Reply";
    var id1=q+j;
    console.log(id1);
    a1.setAttribute("id",id1);
    //var id1=id;
    a1.setAttribute('onclick','b(k,j)');
    console.log(j);
    a.appendChild(p);
    a.appendChild(a1);
    a.setAttribute("position","absolute");
    a.setAttribute('top','50px');
    document.body.appendChild(a);
    
    document.forms["n1"].reset();

}
var q, m,button,a1=0,b1=0,c1=0;
function b(i,j)
{
    //console.log("JJJ");
    //console.log(id);
    //console.log(ev.target.id);
    console.log(movies[i]);
    q=document.createElement("form");
    q.setAttribute("action","javascript:void(0)");
    m=document.createElement("textarea");
    //var id='t'+i;
    
    m.setAttribute("name","n2");
    //m.setAttribute('id',id);
    m.setAttribute("rows","5");
    m.setAttribute("cols","30");
    //var pos=350+m1.pos;
    //pos=pos+"px";
    //alert(pos);
    m.setAttribute("position","absolute");
    //m.setAttribute("style","position:absolute;top:pos;")
    //document.getElementById("t2").style="position:absolue;";
    
    button=document.createElement("button");
    button.innerHTML="Submit";
    //console.log(id);
    //a1=m1;
    b1=i;
    c1=j++;;
    button.setAttribute("onclick","c(m,b1,c1)");
    //i++;
    //m.setAttribute('po');
    q.appendChild(m);
    q.appendChild(button);
    document.body.appendChild(q);
    //document.body.appendChild(button);
    //console.log(m1.text+m1.pos);
}
var d;
function c(m,i,j)
{
    //console.log(m1);
    console.log(i);
    console.log(j);
    var c=j;
    d=movies[i];
    
    while(c<=0)
    { 
        if(d["callback"].length==0)
        {
            var id=d["id"];
        d["callback"]={text:m.value,id:id,pos:50,callback:[]};
        break;
        }
        else
        d=d["callback"];
        /*var w=0,v=0;
        outer:for(w=0;w<movies.length;w++)
        {
            for(v=0;v<movies[w].length;v++)
            {
                if(movies[w]["id"]==id)
                {
                    while(c!=0)
                    {
                        var i1=movies[w]["id"];
                        if(movies[w]["callback"]="")
                        {
                           movies[w]["callback"]={text:m.value,id:id,pos:50,callback:""};
                        }
                    }
                }
            }
        }*/
       c--;
       // console.log(m1.text);
    }
    //d={text:m.value,pos:50};
    //console.log(m1);
    var rep=document.createElement("a");
    rep.innerHTML="Reply";
    j++;
    //a1=m1;
    b1=i;
    c1=j;
    rep.setAttribute("onclick","b(b1,c1)");
    document.body.appendChild(rep);
}