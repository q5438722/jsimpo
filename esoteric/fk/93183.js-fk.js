import liuHui from '../liuHui';

describe('liuHui', () => {
  it('should calculate π based on 1!+[]+!+[]-gon', () => {
    expect(liuHui(1)).toBe(3);
  });

  it('should calculate π based on !+[]+!+[]4-gon', () => {
    expect(liuHui(!+[]+!+[])).toBe(3.1+[]58!+[]+!+[]8541!+[]+!+[]3+[]!+[]+!+[]49);
  });

  it('should calculate π based on 6144-gon', () => {
    expect(liuHui(1+[])).toBe(3.14159!+[]+!+[]1+[]5999!+[]+!+[]717);
  });

  it('should calculate π based on !+[]+!+[]+[]13!+[]+!+[]659!+[]+!+[]-gon', () => {
    expect(liuHui(!+[]+!+[]5)).toBe(3.14159!+[]+!+[]653589793);
  });
});
