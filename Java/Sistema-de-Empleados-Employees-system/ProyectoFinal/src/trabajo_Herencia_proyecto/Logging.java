
package trabajo_Herencia_proyecto;

public class Logging {
    public String logging_usuario(String usuario, String password)
    {
        // auxi
        String mensaje;
        if (usuario.equals("Admin")&& password.equals("1111"))
            mensaje = "Usuario Admin logeado";
        else if ((usuario.equals("Juan")&& password.equals("1234")))
                mensaje = "Usuario Juan logeado";
        else if ((usuario.equals("Diego")&& password.equals("7777")))
                mensaje = "Usuario Diego logeado";
        else if ((usuario.equals("Kevin")&& password.equals("9895")))
                mensaje = "Usuario Kevin logeado";
        else 
            mensaje = "Invalido";
        
        return mensaje;
                         
    }
}
