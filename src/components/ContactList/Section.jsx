import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  align-items: center;

  flex: 1;

  background: #f5f5f5;
  background: #fff;

  overflow: hidden;
  border: 1px solid #eaeaea;
  border-radius: 30px;
  box-shadow: 0px 0px 6px rgb(207 187 187 / 30%);
  box-shadow: 0px 0px 16px #68646b67;

  &.Phonebook__sidebar {
    display: flex;
    flex-direction: column;
  }

  h1,
  h2 {
    font-weight: 600;
    font-size: 26px;
    color: #913fd5;
  }

  h1 {
    font-size: 32px;
  }
`;

export default Section;
