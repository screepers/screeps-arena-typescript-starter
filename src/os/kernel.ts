
export class Kernel {

  static instance: Kernel;

  public static init(): Kernel {

    if (!Kernel.instance) {
      Kernel.instance = new Kernel();
    }
    return Kernel.instance;
  }
}
