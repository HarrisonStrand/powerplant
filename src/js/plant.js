import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';

// This function stores our state.

const storeState = (intialState) => {
	let currentState = intialState;
	return (stateChangeFunction = state => state) => {
		const newState = stateChangeFunction(currentState);
		currentState = {...newState};
		return newState;
	}
	}
	
  const stateControl = storeState();
  const pineTreeControl = storeState({soil: 5, water: 2});
  const palmTreeControl = storeState({soil: 12, water: 7});
	let intialState = { pineTreeControl, palmTreeControl };
	
	
  // This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
  
  const changeState = (prop) => {
	return (value) => {
		return (state) => ({
		...state,
		[prop] : (state[prop] || 0) + value
		})
	}
  }
  
  // We create four functions using our function factory. We could easily create many more.
  
  const feed = changeState("soil")(1);
  const blueFood = changeState("soil")(5);
  
  const hydrate = changeState("water")(1);
  const superWater = changeState("water")(5);



	$(document).ready(function() {
  
		// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
		
		$('#feed').click(function() {
			const newState = pineTreeControl(feed);
			$('#soil-value').text(`${newState.soil}`);
		});

		$('#blueFood').click(function() {
			const newState = pineTreeControl(blueFood);
			$('#soil-value').text(`${newState.soil}`);
		});
		
		$('#hydrate').click(function() {
			const newState = pineTreeControl(hydrate);
			$('#hydration-value').text(`${newState.water}`);
		});

		$('#superWater').click(function() {
			const newState = pineTreeControl(superWater);
			$('#hydration-value').text(`${newState.water}`);
		});
		
		

		
		// This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
		
		$('#show-state').click(function() {
			// We just need to call stateControl() without arguments to see our current state.
			const currentState = pineTreeControl();
			$('#soil-value').text(`${currentState.soil}`);
			$('#hydration-value').text(`${currentState.water}`);
    });
        
		$('#show-state2').click(function() {
			// We just need to call stateControl() without arguments to see our current state.
			const currentState = palmTreeControl();
			$('#soil-value2').text(`${currentState.soil}`);
			$('#hydration-value2').text(`${currentState.water}`);
		});
	});