export class LogicaUtils{

    /**
     * 
     * @returns 
     */
    static correoAleatorio() {
        const chars = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let email = '';
        for (let i = 0; i < 15; i++) {
          email += chars[Math.floor(Math.random() * chars.length)];
        }
        return email + '@gmail.com';
      }
}