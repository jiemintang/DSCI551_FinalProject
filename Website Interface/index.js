//var i = 0;
for ( var i = 0; i < 20; i++ ){
    var rootRef = firebase.database().ref("data").child(i);
    //var content = '';
    rootRef.on("value", snap => {

        var content = '';
        var areaId = snap.child("AreaID").val();
        var areaName = snap.child("AreaName").val();
        var ccd = snap.child("CCDescription").val();
        var date = snap.child("DateOccurred").val();
        var time = snap.child("TimeOccurred").val();
        var age = snap.child("VictimAge").val();
        var descent = snap.child("VictimDescent").val();
        var sex = snap.child("VictimSex").val();
        var weapon = snap.child("WeaponDescription").val();

        content += '<tr>';
        content += '<td>' + areaId + '</td>';
        content += '<td>' + areaName + '</td>';
        content += '<td>' + ccd + '</td>';
        content += '<td>' + date + '</td>';
        content += '<td>' + time + '</td>';
        content += '<td>' + age + '</td>';
        content += '<td>' + descent + '</td>';
        content += '<td>' + sex + '</td>';
        content += '<td>' + weapon + '</td>';
        content += '</tr>';
        $('#ex-table').append(content);

    //$("#table_body").append("<tr><td>" + areaId + "</td><td>" + areaName + "</td><td>" + ccd + "</td><td>" + date + "</td><td>" + time + "</td><td>" + sex + "</td></tr>");
    })
};

/*var database = firebase.database().ref("data");


database.on('value', function (snapshot) {
    console.log('snapshot -> :', snapshot)
    if (snapshot.exists()) {
        var content = '';
        var data = snapshot.val()
        var i = 0;
        console.log('data -> :', data)

        data.forEach(element => {
            var areaId = element.AreaID;
            var areaName = element.AreaName;
            var ccd = element.CCDescription;
            var date = element.DateOccurred;
            var time = element.TimeOccurred;
            var age = element.VictimAge;
            var descent = element.VictimDescent;
            var sex = element.VictimSex;
            var weapon = element.WeaponDescription;
            i++;
            
            if ( i < 20){
            content += '<tr>';
            content += '<td>' + areaId + '</td>';
            content += '<td>' + areaName + '</td>';
            content += '<td>' + ccd + '</td>';
            content += '<td>' + date + '</td>';
            content += '<td>' + time + '</td>';
            content += '<td>' + age + '</td>';
            content += '<td>' + descent + '</td>';
            content += '<td>' + sex + '</td>';
            content += '<td>' + weapon + '</td>';
            content += '</tr>';
            }
        });
        $('#ex-table').append(content);
    }
});*/