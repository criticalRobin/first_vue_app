import Counter from "@/components/Counter.vue";
import { shallowMount, mount } from "@vue/test-utils";

// describe es una función global de Jest que agrupa pruebas relacionadas
describe("Pruebas del Componente Counter", () => {
  // test es otra función global de Jest que permite definir una prueba
  test("Debe hacer match con el snapshot", () => {
    // shallowMount es una función de Vue Test Utils que monta un componente de manera superficial
    // Esto significa que no se montan los componentes hijos
    const wrapper = shallowMount(Counter);

    // expect es otra función global de Jest que permite hacer afirmaciones
    // .toMatchSnapshot() es un matcher de Jest que compara la salida actual con un snapshot previo
    // Un snapshot es una representación serializada del output de una prueba que se guarda en un archivo
    // En pruebas futuras, Jest compara la salida con el snapshot guardado
    // Si la salida coincide con el snapshot, la prueba pasa. Si no, la prueba falla
    expect(wrapper.html()).toMatchSnapshot();
  });
});
