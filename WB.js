const potato = function() {
	const obj = {
		sound: function() {
			return `${sound}`
		}
	}
	return obj
}

const faucet = potato("faucet");
const faucet = potato("faucet");
const faucet = potato("faucet");

faucet.sound("drip drip drip");
oldCar.sound("grumble grumble");
sleepyBear.sound("grrr.... yawn");



const paint = function(painter) {
  const obj = {
    paints: function(color) {
      return `paints ${color}.`
    }
  }
  return obj
}

const painter1 = paint("Painter1")

painter1.paints("green")

// const draw = function(painter) {
//   const obj = {
//     draws: function(color) {
//       return `draws ${color}.`
//     }
//   }
//   return obj
// }

// const artist = function(name) {
//   let state = {
//     name
//   }
//   return{ ...state, ...paint(state), ...draw(state)};
// }

const student = artist('Steve');


const painter1 = paint("green")








painter1.paints();

"paints green";