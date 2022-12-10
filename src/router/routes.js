
import helo from "../components/HelloWorld.vue"
import login from "../components/login.vue"
import registro from "../components/registro.vue"
import Cotizaciones from "../components/Cotizaciones.vue"
import Recepcion from "../components/RecepcionMuestra.vue"
import nuevousuario from "../components/NuevoUsuario.vue" 
import usuarios from "../components/Usuarios.vue"
import configuracion from "../components/configuracion.vue"
import ensayo from "../components/ensayo.vue"
import setup from "../components/setup.vue"
import listarensayo from "../components/listarensayos.vue"
import editarfuncionario from "../components/editarfuncionario.vue"
import listadoMuestra from "../components/listadoMaestroMuestras.vue"
import orden from "../components/orden.vue"
import traerCotizacion from "../components/traerCotizacion.vue"
export const routes= [
  {path: "/",component: login} ,
  {path: "/helo",component: helo},
  {path: "/registro",component: registro},
  {path: "/cotizacion", component:Cotizaciones},
  {path: "/recepcionmuestra", component:Recepcion},
  {path: "/nuevousuario",component: nuevousuario},
  {path: "/usuarios", component: usuarios},
  {path: "/configuracion", component: configuracion},
  {path: "/ensayo", component: ensayo},
  {path: "/setup", component: setup},
  {path: "/listarensayo", component: listarensayo},
  {path: "/editarfuncionario", component: editarfuncionario},
  {path: "/listadoMuestra", component: listadoMuestra},
  {path: "/orden", component: orden},
  {path: "/traerCotizacion", component: traerCotizacion},
]
