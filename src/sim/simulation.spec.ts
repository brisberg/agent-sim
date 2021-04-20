import {Agent, AgentType} from './agent';
import {Simulation} from './simulation';

describe('Simulation', () => {
  it('should begin at turn 0', () => {
    const sim = new Simulation();

    expect(sim.getTurnCount()).toEqual(0);
  });

  describe('step()', () => {
    it('should increment turn count', () => {
      const sim = new Simulation();
      sim.init();

      sim.step();

      expect(sim.getTurnCount()).toEqual(1);
    });

    it('should activate all the agents in the simulation', () => {
      const agent = new Agent('1', AgentType.VILLAGER);
      spyOn(agent, 'activate');
      const sim = new Simulation();
      sim.init([], [agent]);

      sim.step();

      expect(agent.activate).toHaveBeenCalledTimes(1);
    });
  });
});
