import React from 'react'
import rodapeStyle from '@/components/styles/rodape.scss';

export default function Rodape() {
  return (
    <footer>
    <div>
        <h2>Integrantes</h2>
        <ul>
          <li>Eduardo Moura Batageli - RM 97611 - 1TDSS</li>
          <li>Felipe Rodrigues Franco de Oliveira — RM 552101 - 1TDSB</li>
          <li>Murilo Ribeiro Valério da Silva - RM550858 - 1TDSB</li>
          <li>Rafael Minoro Itokazo -  RM99988 - 1TDSS</li>
          <li>Vitor da Silva Pereira - RM551831 - 1TDSPV</li>
        </ul>
       
    </div>
    <div>
    <h2>Cargos</h2>
        <ul>
          <li>Construção lógica api</li>
          <li>Idealização do software</li>
          <li>Criação Banco de Dados do projeto</li>
          <li>Estilização e integração JAVA</li>
          <li>Idealização de software design</li>

        </ul>
    </div>
    </footer>
  )
}