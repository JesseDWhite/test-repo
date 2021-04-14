import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Triangle from './js/triangle.js';
import Rectangle from './js/rectangle.js';

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        const lengthOne = $("#side1").val();
        const lengthTwo = $("#side2").val();
        const lengthThree = $("#side3").val();

        const triangle = new Triangle(lengthOne, lengthTwo, lengthThree);

        const response = triangle.checkType();
        $("#response").html(`<p>${response}</p>`);

        $('#rectangle-area-form').submit(function (event) {
            event.preventDefault();
            const length1 = parseInt($('#rect-length1').val());
            const length2 = parseInt($('#rect-length2').val());
            const rectangle = new Rectangle(length1, length2);
            const response = rectangle.getArea();
            $('#response2').append(`<p> The area of the rectangle is ${response}.</p>`);
        });
    });

});