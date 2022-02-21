import { createPipeFactory, SpectatorPipe } from "@ngneat/spectator";
import { CutPipe } from "./cut.pipe";

describe('cut-pipe', () => {
  let spectator: SpectatorPipe<CutPipe>;
  const createPipe = createPipeFactory(CutPipe);

  it('should cut long texts', () => {
    spectator = createPipe(`{{ 'das ist ein langer Text der abgeschnitten werden soll' | cut: 24 }}`);
    expect(spectator.element).toHaveText('das ist ein langer Text ...')
  });
});
