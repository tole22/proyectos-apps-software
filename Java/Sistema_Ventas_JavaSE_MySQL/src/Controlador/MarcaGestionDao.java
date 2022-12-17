package Controlador;

import java.sql.CallableStatement;
import java.sql.Connection;
//import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.util.ArrayList;

import entidad.Marca;
import interfaces.MarcaInterfaceDao;
import utils.ConnectionMySQL_8;

public class MarcaGestionDao implements MarcaInterfaceDao{

	
	private Connection cn;
//	private PreparedStatement ps;
	private CallableStatement cs;
	private ResultSet rs;
	private ArrayList<Marca> lista;
	private Marca obj;
	
	// Sentencias
	
	final String GETALL_ORG = "{call pa_listar_marca_original()}";
	final String LASTCODE = "{call pa_buscar_ultimo_codigo_marca()}";
	final String INSERT = "{call pa_insertar_marca(?,?)}";
	final String UPDATE = "{call pa_actualizar_marca(?,?)}";
	final String SEARCH_ORG_ALL_IXT = "{call pa_buscar_marca_original_all_ixt(?)}";

	
	
	
	@Override
	public String generarCodigo() {
		
		String codMarca = "MA001";
		
		try{
			cn = ConnectionMySQL_8.getConnection();
			cs = cn.prepareCall(LASTCODE);
			rs = cs.executeQuery();
			
			if(rs.next()){
				DecimalFormat df = new DecimalFormat("000");
				codMarca = "MA" + df.format(Integer.parseInt(rs.getString(1)) + 1); // example -> 003 + 1 = 004
			}
			
		}catch (SQLException e) {
			System.out.println("Error en la sentencia generarCodigo() - MARCA --> " + e.getMessage());
		}catch (Exception e){
			System.out.println("Error en la sentencia generarCodigo() - MARCA --> " + e.getMessage());
		}finally {
			try {
				if( rs != null ) rs.close();
				if( cs != null ) cs.close();
				if( cn != null ) cn.close();
			} catch (SQLException e2) {
				System.out.println("Error al cerrar la base de datos --> " + e2.getMessage());
			}
		}
		return codMarca;
	}

	
	
	@Override
	public ArrayList<Marca> listarOriginal() {
		
		lista = new ArrayList<Marca>();
		
		try{
			cn = ConnectionMySQL_8.getConnection();
			cs = cn.prepareCall(GETALL_ORG);
			rs = cs.executeQuery();
			
			while(rs.next()){
				int i=1;
				obj = new Marca(
						rs.getString(i++),
						rs.getString(i++)
				);
				lista.add(obj);
			}
			
		}catch (SQLException e) {
			System.out.println("Error en la sentencia Listar() - MARCA" + e.getMessage());
		}catch (Exception e){
			System.out.println("Error en la sentencia Listar() - MARCA --> " + e.getMessage());
		}finally {
			try {
				if( rs != null ) rs.close();
				if( cs != null ) cs.close();
				if( cn != null ) cn.close();
			} catch (SQLException e2) {
				System.out.println("Error al cerrar la base de datos" + e2.getMessage());
			}
		}
		return lista;
	}

	
	
	@Override
	public int registrar(Marca c) {
		
		int respuesta = -1;
		try {
			cn = ConnectionMySQL_8.getConnection();
			cs = cn.prepareCall(INSERT);
			
			int i = 1;
			cs.setString(i++, c.getCod_marca());
			cs.setString(i++, c.getNombre_marca());
			
			respuesta = cs.executeUpdate();
			
		}catch (SQLException e1) {
			System.out.println("Error en la sentencia registrar() - MARCA" + e1.getMessage());
		}catch (Exception e){
			System.out.println("Error en la sentencia registrar() - MARCA --> " + e.getMessage());
		}finally {
			try {
				if( rs != null ) rs.close();
				if( cs != null ) cs.close();
				if( cn != null ) cn.close();
			} catch (SQLException e2) {
				System.out.println("Error al cerrar la base de datos" + e2.getMessage());
			}
		}
		return respuesta;
	}

	
	
	@Override
	public int actualizar(Marca c) {
		
		int respuesta = -1;
		try {
			cn = ConnectionMySQL_8.getConnection();
			cs = cn.prepareCall(UPDATE);
			
			int i = 1;
			cs.setString(i++, c.getCod_marca());
			cs.setString(i++, c.getNombre_marca());
			
			respuesta = cs.executeUpdate();
			
		}catch (SQLException e1) {
			System.out.println("Error en la sentencia actualizar() - MARCA" + e1.getMessage());
		}catch (Exception e){
			System.out.println("Error en la sentencia actualizar() - MARCA --> " + e.getMessage());
		}finally {
			try {
				if( rs != null ) rs.close();
				if( cs != null ) cs.close();
				if( cn != null ) cn.close();
			} catch (SQLException e2) {
				System.out.println("Error al cerrar la base de datos" + e2.getMessage());
			}
		}
		return respuesta;
	}

	
	
	@Override
	public ArrayList<Marca> buscarOrgAllIxt(String valor) {
		
		lista = new ArrayList<Marca>();
		
		try{
			cn = ConnectionMySQL_8.getConnection();
			cs = cn.prepareCall(SEARCH_ORG_ALL_IXT);
			cs.setString(1, valor);
			
			rs = cs.executeQuery();
			
			while(rs.next()){
				
				obj = new Marca(
						rs.getString(1),
						rs.getString(2)
				);
				lista.add(obj);
			}
			
		}catch (SQLException e) {
			System.out.println("Error en la sentencia buscar() - MARCA --> " + e.getMessage());
		}catch (Exception e){
			System.out.println("Error en la sentencia buscar() - MARCA --> " + e.getMessage());
		}finally {
			try {
				if( rs != null ) rs.close();
				if( cs != null ) cs.close();
				if( cn != null ) cn.close();
			} catch (SQLException e2) {
				System.out.println("Error al cerrar la base de datos --> " + e2.getMessage());
			}
		}
		return lista;
	
	}

	
}
