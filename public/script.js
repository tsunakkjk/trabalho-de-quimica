

    function checkAnswers() {
        const respostas = {
            q1: 'c',
            q2: 'c',
            q3: 'c',
            q4: 'c',
            q5: 'c',
            q6: 'b'
        };

        for (let q in respostas) {
            const radios = document.getElementsByName(q);
            let respostaUsuario = '';
            for (let r of radios) {
                if (r.checked) respostaUsuario = r.value;
            }
            const resultado = document.getElementById('a' + q.slice(1));
            if (respostaUsuario === respostas[q]) {
                resultado.innerHTML = '✅ Resposta correta!';
                resultado.style.color = 'green';
            } else if (respostaUsuario === '') {
                resultado.innerHTML = '⚠️ Por favor, selecione uma resposta.';
                resultado.style.color = 'orange';
            } else {
                resultado.innerHTML = '❌ Resposta incorreta.';
                resultado.style.color = 'red';
            }
        }
    }
