name_of_the_guest_array = [];
name_of_the_guest_array_without_commas = [];
name_of_the_guest_array_sorted = [];
name_of_the_guest_array_search = [];

function submit()
{
    var display_guest_array = [];


    for(var j = 1; j <= 4; j++)
    {
        var name_of_the_guest = document.getElementById("name_of_the_guest_1"+j).value;
        console.log(name_of_the_guest);
        name_of_the_guest_array.push(name_of_the_guest);
    }

    console.log(name_of_the_guest_array);

    var length_of_name_of_guest_array = name_of_the_guest_array.length;
    console.log(display_guest_array);

    for (var k = 0; k < length_of_name_of_guest_array; k++)
    {
        display_guest_array.push( name_of_the_guest_array[k] );
        console.log(display_guest_array);
    }

    console.log(display_guest_array);
    document.getElementById("display_name_1").innerHTML = display_guest_array;

    document.getElementById("sort_button").style.display =  "inline-block";

}

function sorting()
{
    name_of_the_guest_array.sort();
    console.log(name_of_the_guest_array);

    var display_guest_array_sorting = [];


    var length_of_name_of_guest_array = name_of_the_guest_array.length;
    console.log(length_of_name_of_guest_array);

    for (var k = 0; k < length_of_name_of_guest_array; k++)
    {
        display_guest_array_sorting.push("<h4>Name - "+ name_of_the_guest_array[k] + "<h4>");
        console.log(display_guest_array_sorting);
    }

    
}

function show()
{
    var display_guest_array = [];


    for(var j = 1; j <= 4; j++)
    {
        var name_of_the_guest = document.getElementById("name_of_the_guest_1"+j).value;
        console.log(name_of_the_guest);
        name_of_the_guest_array.push(name_of_the_guest);
    }

    console.log(name_of_the_guest_array);

    var length_of_name_of_guest_array = name_of_the_guest_array.length;
    console.log(display_guest_array);

    for (var k = 0; k < length_of_name_of_guest_array; k++)
    {
        display_guest_array.push( name_of_the_guest_array[k] );
        console.log(display_guest_array);
    }
    var remove_commas = display_guest_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_2").innerHTML = remove_commas;
}

function searching()
{
    var s = document.getElementById("name_of_the_guest_2").value;
    var found = 0;
    var j;
    for(j=0; j<name_of_the_guest_array.length; j++)
    {
        if(s==name_of_the_guest_array[j])
        {
            found = found+1
        }
        document.getElementById("display_name_4").innerHTML="name found "+found+"times/s";
        console.log("name found "+found+"times/s");
    }
}
