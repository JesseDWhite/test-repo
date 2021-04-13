import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Triangle from './triangle.js';

$(document).ready(function () {
    ("form").submit(function (event) {
        event.preventDefault();

        const lengthOne = $("#side1").val();
        const lengthTwo = $("#side2").val();
        const lengthThree = $("#side3").val();

        const triangle = new Triangle(lengthOne, lengthTwo, lengthThree);

        const response = triangle.checkType();
        $("#response").append(`<p>${response}</p>`);

    });
});