export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;
    members: number= 11;
    baseColor: number = 0xa3f4d5;
    role: number = 0b1001;
    systemID: number = 0o7700;
    average: number = 4.5;
    adminName: string = "gdg";
    sumPoints: string = `Members have ${this.members * this.average} szorzata> points`;
   

    // Hozd létre a következő változókat a megfelelő típusannotációval.
    /** @type {number} members - value: 11 */
    

    /** @type {number} baseColor - value: a3f4d5 (hexadecimal number) */
    

    /** @type {number} role - value: 1001 (binary number) */
    

    /** @type {number} systemID - value: 7700 (octal number) */
    

    /** @type {number} average - value: 4.5 */
    

    /** @type {string} adminName - value: szabadon választott szöveg */
    

    /** @type {string} sumPoints - value: 'Members have <this.members és a this.average szorzata> points' (template string) */


}
