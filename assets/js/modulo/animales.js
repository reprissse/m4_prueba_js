// módulo 'animales' se autoejecuta
const animales = (() => {
    
    // getData que obtiene los datos de los animales
    const getData = async () => {
        // fetch para obtener los datos del archivo 'animales.json'
        const response = await fetch("../../animales.json");
        
        // obtener el array de animales
        const { animales } = await response.json();
  
        // devolver el array de animales
        return animales;
    };
  
    // Devolvemos getData para que pueda ser utilizada fuera del módulo
    return {
        getData
    }
  })();
  
  // exportar animales
  export default animales;