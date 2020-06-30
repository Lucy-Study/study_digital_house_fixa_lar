"use strict";

let qntdItens = $("#cards-result .cartao").length;
let limitePorPg = 4;

$("#cards-result .cartao:gt(" + (limitePorPg - 1) + ")").hide();

let totalPgs = Math.ceil(qntdItens / limitePorPg);

//Prev Button
$(".pagination").append(
  "<li class='page-item' id='prev'><a class='page-link text-success' href='javascript:void(0)' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>"
);

//Active Page Button
$(".pagination").append(
  "<li class='page-item active' id='pg-atual'><a class='page-link text-success' href='javascript:void(0)'>" +
    1 +
    "</a></li>"
);

//Number Page Buttons
for (let i = 2; i <= totalPgs; i++) {
  $(".pagination").append(
    "<li class='page-item' id='pg-atual'><a class='page-link text-success' href='javascript:void(0)'>" + i + "</a></li>"
  );
}

//Next Button
$(".pagination").append(
  "<li class='page-item' id='next'><a class='page-link text-success' href='javascript:void(0)' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>"
);

//Pagination Logic
$(".pagination li#pg-atual").on("click", function () {
  if ($(this).hasClass("active")) {
    return false;
  } else {
    let pgAtual = $(this).index();
    $(".pagination li").removeClass("active");
    $(this).addClass("active");
    $("#cards-result .cartao").hide();

    let totalGeral = limitePorPg * pgAtual;
    for (let i = totalGeral - limitePorPg; i < totalGeral; i++) {
      $("#cards-result .cartao:eq(" + i + ")").show();
    }
  }
});

//NEXT Logic
$("#next").on("click", function () {
  let pgAtual = $(".pagination li.active").index();
  if (pgAtual === totalPgs) {
    return false;
  } else {
    pgAtual++;
    $(".pagination li").removeClass("active");
    $("#cards-result .cartao").hide();

    let totalGeral = limitePorPg * pgAtual;
    for (let i = totalGeral - limitePorPg; i < totalGeral; i++) {
      $("#cards-result .cartao:eq(" + i + ")").show();
    }
    $(".pagination li.pgAtual:eq(" + (pgAtual - 1) + ")").addClass("active");
  }
});

//PREVIOUS Logic
$("#prev").on("click", function () {
  let pgAtual = $(".pagination li.active").index();
  if (pgAtual === 1) {
    return false;
  } else {
    pgAtual--;
    $(".pagination li").removeClass("active");
    $("#cards-result .cartao").hide();

    let totalGeral = limitePorPg * pgAtual;
    for (let i = totalGeral - limitePorPg; i < totalGeral; i++) {
      $("#cards-result .cartao:eq(" + i + ")").show();
    }
    $(".pagination li.pgAtual:eq(" + (pgAtual - 1) + ")").addClass("active");
  }
});
