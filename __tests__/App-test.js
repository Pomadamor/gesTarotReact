/**
 * @format
 */
import { CalculScore } from "../app/service/CalculScore"
import 'react-native';

it('renders correctly', () => {

  const datasTest = {
    type: "Petite",
    bou: 2,
    scoreJ1: 50,
    scoreJ2: -25,
    scoreJ3: -25,
    scoreJ4: 0,
    scoreJ5: 0,
    score: 41,
    preneur: "Joueur 1",
    partenaire: ""
  }

  const result = ([{ type: 'MUTATION_SCORE_J1', value: 100 },
  { type: 'MUTATION_SCORE_J2', value: -50 },
  { type: 'MUTATION_SCORE_J3', value: -50 },
  { type: 'MUTATION_SCORE_J4', value: -25 },
  { type: 'MUTATION_SCORE_J5', value: -25 }]).toString()

  expect(
    CalculScore(
      datasTest
    ).toString()).toBe(result)

});
