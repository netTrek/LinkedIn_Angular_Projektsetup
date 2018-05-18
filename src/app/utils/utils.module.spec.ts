import { UtilsModule } from './utils.module';

describe('UtilsModule', () => {
  let utilsModule: UtilsModule;

  beforeEach(() => {
    utilsModule = new UtilsModule();
  });

  it('should create an instance', () => {
    expect(utilsModule).toBeTruthy();
  });
});
