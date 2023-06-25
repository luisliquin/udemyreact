import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto ', () => {
    const testUser ={
        uid: 'ABC123',
        username: 'El_Papi1502'
    };
    const user = getUser();
    expect(testUser).toEqual(user);    
  });

  test('getUsuarioActivo debe de retornar un objeto', () => {
    const name = "Luis";
    const usuarioActivo = getUsuarioActivo(name);
    expect(usuarioActivo).toStrictEqual({
        uid: 'ABC567',
        username : name
    });
    console.log(usuarioActivo);
  })
  

});
