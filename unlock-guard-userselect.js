var a = document, b = ["userSelect","khtmlUserSelect","MozUserSelect","MsUserSelect","WebkitUserSelect"];
Array.prototype.forEach.call(
    a.all,function(a){
        a.style&&b.forEach(
            function(b){
                a.style[b]="auto"
            }),
        a.onmousedown = a.onmousemove = a.onmouseup = a.onselectstart = ""
    }
),
a.onmousedown = a.onmousemove = a.onmouseup = a.onselectstart = a.oncontextmenu = a.body.oncontextmenu=""