
package trabajo_Herencia_proyecto;

public class Empleado_Planilla extends Empleado {
    // atributos
private int cant_hijos;
private String afp;
private String onp;
// constructor sin paramettro
public Empleado_Planilla(){
    
}
//constructor parametros

    public Empleado_Planilla( String nombre, String apellido, String dni, String direccion, int edad, String formacionAcademica, int añosExperiencia, int horas_trabajadas,
                             int pago_horas,int cant_hijos,String afp,String onp) {
        super(nombre, apellido, dni, direccion, edad, formacionAcademica, añosExperiencia, horas_trabajadas, pago_horas);
     
        this.cant_hijos = cant_hijos;
        this.afp= afp;
        this.onp = onp;
    }

   


    public int getCant_hijos() {
        return cant_hijos;
    }

    public void setCant_hijos(int cant_hijos) {
        this.cant_hijos = cant_hijos;
    }
  
    public String getAfp() {
        return afp;
    }

    public void setAfp(String afp) {
        this.afp = afp;
    }

     public String getOnp() {
        return onp;
    }

    public void setOnp(String onp) {
        this.onp = onp;
    }
  
  
  
    
@Override
    public double sueldoBruto(){
        return getHoras_trabajadas() * getPagoPorHora();
    }
    
@Override
    public int  horasExtras()
    {
         int horaExtras = getHoras_trabajadas() -  40;
         if (getHoras_trabajadas() > 40 )
             return getPagoPorHora() * 2 * horaExtras;
         else 
             return 0;
    }
@Override
    public int cant_horas_extras()
    {    int horasExtras = getHoras_trabajadas() - 40;
         if (getHoras_trabajadas() > 40)
        return  horasExtras;
         else 
        return 0;
    }
    private double pension ()
    {
        if ( onp.equals("ONP 2.5%"))
            return sueldoBruto()* 0.025;
        else if (afp.equals("AFP 1.5%"))
            return sueldoBruto() * 0.015;
        else 
            return 0.0;
    }
     private double bonoHijos ()
    {
        if ( getCant_hijos() > 0 && getCant_hijos() <= 2)
            return sueldoBruto() * 0.032;
        else if ( getCant_hijos() > 2 && getCant_hijos() <= 4)
            return sueldoBruto() * 0.05;
        else if ( getCant_hijos() > 4 && getCant_hijos() <= 6)
            return sueldoBruto() * 0.075;
        else 
            return 0.0;
    }
    
@Override
     public double sueldoNeto(){
         return sueldoBruto() + horasExtras() + bonoHijos() - pension();
     }
    @Override
    public String imprimirBoletaPago() {
       
   return                 
                          "INFORME DEL TRABAJADOR" + "\n" +
                           "---------------------" + "\n" +
                           "                       "+ "\n" +
                           "Datos del Empleado" + "\n" +
                           "Nombres: " + super.getNombre()+"\n" +
                           "Apellidos: " + super.getApellido()+"\n" +
                           "DNI: "  + super.getDni()+ "\n" +
                           "Edad: " + super.getEdad()+"\n" +
                           "Dirección: " + super.getDireccion()+"\n" +
                           "Formación Academica: " + super.getFormacionAcademica()+ "\n" +
                           "Años de experiencia: " + super.getAñosExperiencia()+ "\n" +
                           "                        " + "\n" +
                           "Resumen de Pago" + "\n" +
                           "                       "+ "\n" +
                           "Sueldo Bruto: S/ " + this.sueldoBruto()+ "\n" +
                           "Horas Extras: " + cant_horas_extras() + "\n" +
                           "Pago por horas Extras: S/ " + horasExtras() + "\n" +
                           "Pension: S/ " + pension()+ "\n" +
                           "Bono por hijos: S/ " + bonoHijos()+ "\n" +
                           "Sueldo Neto: S/ " + sueldoNeto();
    }

 

}
