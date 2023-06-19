import styled from 'styled-components'
import type {CardTwo} from '.'

export const Container = styled.div<Partial<CardTwo>>`
  width: 100%;
  max-width: 200px;
  height: 350px;
  padding: 20px 15px 20px;
  display: flex;
  flex-direction: column;
  background-color: ${({background})=> background};  
  margin-bottom: 10px;
  color: #fff;
  overflow: hidden;
  transition: 0.2s ease;

  &:hover{
    scale:1.1;
  }

  header{
    margin-bottom: 18px;

    p{
      font-size: 18px;
      font-weight: 600;
    }

    svg{
      width:20px
    }
  }

`