
    var A = ['#cc00ff66', 'transparent'];
    // Site pra construir boas usemaps: https://www.image-map.net/
    // As duas funções em JS servem para transformar a área html em área svg, permitindo assim que ela seja clicada e executada.
    function selecionarArea(ad, field) {
		//alert(ad + '::' + field);
        var el = document.getElementById(ad);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var value = document.getElementById(field.name).value;
                if (value) {
                    value = document.getElementById(field.name).value.split(',');
                    if (value.find(x => x == this.responseText)) { // ver se o valor já está na string
                        document.getElementById(field.name).value = value.filter(x => x !== this.responseText.toString());
                        el.style.fill = A[1];
                    } else {
                        document.getElementById(field.name).value = value + ',' + this.responseText;
                        el.style.fill = A[0];
                    }
                } else {
                    document.getElementById(field.name).value = this.responseText;
                    el.style.fill = A[0];
                }
                ;
            }
            ;
        };
        xmlhttp.open('GET', 'ajaxImageMapCheck.php?m=' + field.name + '&s=' + ad.replace('_map', ''), true);
        xmlhttp.send();
    }


    function converterMapaemSVG(ad, field, areaimagem) {
        var m, a, f, t, s, b, c, cc;
        var el = document.getElementById(areaimagem);
        m = document.getElementById(ad);
        a = m.getElementsByTagName('area');
        f = document.getElementById(field).getAttribute('id');
        t = "<svg style='width: " + el.style.width + "; height: " + el.style.height + ";'>";
        for (var i = 0; i < a.length; i++) {
            s = a[i].getAttribute('shape');
            c = a[i].getAttribute('coords');
            b = a[i].getAttribute('id') ? a[i].getAttribute('id') : 'mapaImagem_' + i;

            if (s == 'poly') {
                t += '<polyline points="' + c + '" fill="transparent" id="' + m.name + '_' + b + '_map" onclick="selecionarArea(this.id, ' + f + ')"/>';
            }
            if (s == 'circle') {
                cc = c.split(',');
                t += '<circle cx="' + cc[0] + '"cy="' + cc[1] + '" r="' + cc[2] + '" class="circle" id="' + m.name + '_' + b + '_map" onclick="selecionarArea(this.id, ' + f + ')"/>';
            }
            if (s == 'rect') {
                cc = c.split(',');
                t += '<rect x="' + cc[0] + '"y="' + cc[1] + '" width="' + (cc[2] - cc[0]) + '" height="' + (cc[3] - cc[1]) + '" class="rect" id="' + m.name + '_' + b + '_map" onclick="selecionarArea(this.id, ' + f + ')"/>';
			
            }
			
        }
        t = t += '</svg>';
        el.innerHTML = t;
        var value = document.getElementById(field).value;
        // alert(field + '::' + value);
        if (value) {
            value = document.getElementById(field).value.split(',');
            for (var i in value) {
                selecionarArea(value[i] + "_map", document.getElementById(field));
                selecionarArea(value[i] + "_map", document.getElementById(field));
            }
        }
		
    }
