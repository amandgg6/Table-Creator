let inp = document.querySelector( "#inp" );
let btn = document.querySelector( "#btn" );
let tB = document.querySelector( "#tableBox" );

btn.addEventListener( "click", function () {


    let ul = document.createElement( "ul" );
    ul.classList.add( "tableItems" );

    if ( inp.value == false ) {
        alert( "Enter Number Valid 0 and Empty are not allowed." );
    }
    else {
        tB.style.display = "grid";
        for ( let i = 1; i < 11; i++ ) {

            let li = document.createElement( "li" );
            li.classList.add( "tableItem" );

            let res = inp.value * i;

            let val = `${ inp.value } x ${ i } = ${ res } `;

            li.textContent = val;

            ul.append( li );
            tB.prepend( ul );
        };

    };

    inp.value = ""; //When ever event complite then input value se blank
    console.log( ul );
} );

