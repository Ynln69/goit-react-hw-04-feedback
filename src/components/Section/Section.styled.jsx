import styled from '@emotion/styled';

export const SectionBox = styled.section`
  width: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px -1px;

  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  color: #f0f8ff;
`;
