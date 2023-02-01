var qtdAlunos = 4
var qtdNotas = 4

function desenhaTabela(){
    let dadoAntigo
    for(let i = 1; i <=qtdAlunos; i++){
        dadoAntigo = document.getElementById('conteudo').innerHTML
        document.getElementById('conteudo').innerHTML = dadoAntigo + `<tr>
                                                                        <th>${i}</th>
                                                                        <td><input type="text" class="form-control" id="nome${i}" placeholder="nome"></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}1" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}2" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}3" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}4" placeholder=""></td>
                                                                        <td><output id="media${i}"></output></td>
                                                                        <td><output id="situacao${i}"></output></td>
                                                                        </tr>`
    }
}

function calcular(){
    for(let aluno=1; aluno<=qtdAlunos;aluno++){
        let notaParcial
        let notaSoma = 0
        for(let nota=1;nota<=qtdNotas;nota++){
            notaParcial = Number(document.getElementById(`nota${aluno}${nota}`).value)
            notaSoma = notaSoma + notaParcial
        }
        let media = (notaSoma)/4
        document.getElementById(`media${aluno}`).innerText = media
        if(media >= 50){
            document.getElementById(`situacao${aluno}`).innerText = 'Aprovado'
            document.getElementById(`situacao${aluno}`).style.backgroundColor = 'green'
    
        }else if(media >=45 && media <50){
            document.getElementById(`situacao${aluno}`).innerText = 'Recuperação'
            document.getElementById(`situacao${aluno}`).style.backgroundColor = 'yellow' 
        }else if(media < 45){
            document.getElementById(`situacao${aluno}`).innerText = 'Reprovado'
            document.getElementById(`situacao${aluno}`).style.backgroundColor = 'red'
        }
    }
}