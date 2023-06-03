import {
  Component,
  ElementRef,
  ViewChild,
  Renderer2,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: Event): void {
    event.preventDefault();
  }
  title = 'lofi-web';

  controls: HTMLElement[];
  frame: HTMLIFrameElement;

  constructor(
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.fraseSemana = this.getFraseSemana();
  }
  fraseSemana: string;

  /*   ngAfterViewInit() {
    this.controls = Array.from(
      this.elementRef.nativeElement.querySelectorAll('.video-control')
    );
    this.frame = this.elementRef.nativeElement.querySelector('iframe');

    const message = (func: string) => {
      return JSON.stringify({
        event: 'command',
        func: func,
        args: [],
      });
    };

    const execCommand = (frame: HTMLIFrameElement | any) => {
      return (func: string) => {
        return () => {
          frame.contentWindow.postMessage(message(func), '*');
        };
      };
    };

    const frameCommand = execCommand(this.frame);

    const configControl = (vc: HTMLElement) => {
      const func: any = vc.getAttribute('data-func');
      const handler = frameCommand(func);
      vc.tabIndex = 0;
      this.renderer.listen(vc, 'click', handler);
    };

    this.controls.forEach(configControl);

    const autoplayCommand = frameCommand('playVideo');
    setTimeout(autoplayCommand, 2000);
  }
 */
  youtubeUrl = 'https://www.youtube.com/embed/jfKfPfyJRdk?enablejsapi=1';

  btnComienza: boolean = false;
  letraDesaparece: any = false;
  envia(e: any) {
    if (this.btnComienza == false) {
      this.btnComienza = true;
    } else {
      this.btnComienza = false;
    }
  }

  llamaFuncion() {
    this.btnComienza = true;

    this.controls = Array.from(
      this.elementRef.nativeElement.querySelectorAll('.video-control')
    );
    this.frame = this.elementRef.nativeElement.querySelector('iframe');

    const message = (func: string) => {
      return JSON.stringify({
        event: 'command',
        func: func,
        args: [],
      });
    };

    const execCommand = (frame: HTMLIFrameElement | any) => {
      return (func: string) => {
        return () => {
          frame.contentWindow.postMessage(message(func), '*');
        };
      };
    };

    const frameCommand = execCommand(this.frame);

    const configControl = (vc: HTMLElement) => {
      const func: any = vc.getAttribute('data-func');
      const handler = frameCommand(func);
      vc.tabIndex = 0;
      this.renderer.listen(vc, 'click', handler);
    };

    this.controls.forEach(configControl);
    console.log('letraDesaparece', this.letraDesaparece);
    if (this.letraDesaparece == true) {
      console.log('no haces nada ya');
    } else {
      const autoplayCommand = frameCommand('playVideo');
      setTimeout(autoplayCommand, 1000);
    }
    this.letraDesaparece = true;
  }

  pausa() {
    this.controls = Array.from(
      this.elementRef.nativeElement.querySelectorAll('.video-control')
    );
    this.frame = this.elementRef.nativeElement.querySelector('iframe');

    const message = (func: string) => {
      return JSON.stringify({
        event: 'command',
        func: func,
        args: [],
      });
    };

    const execCommand = (frame: HTMLIFrameElement | any) => {
      return (func: string) => {
        return () => {
          frame.contentWindow.postMessage(message(func), '*');
        };
      };
    };

    const frameCommand = execCommand(this.frame);

    const configControl = (vc: HTMLElement) => {
      const func: any = vc.getAttribute('data-func');
      const handler = frameCommand(func);
      vc.tabIndex = 0;
      this.renderer.listen(vc, 'click', handler);
    };

    this.controls.forEach(configControl);

    const autoplayCommand = frameCommand('pauseVideo');
    autoplayCommand();
  }

  play() {
    this.controls = Array.from(
      this.elementRef.nativeElement.querySelectorAll('.video-control')
    );
    this.frame = this.elementRef.nativeElement.querySelector('iframe');

    const message = (func: string) => {
      return JSON.stringify({
        event: 'command',
        func: func,
        args: [],
      });
    };

    const execCommand = (frame: HTMLIFrameElement | any) => {
      return (func: string) => {
        return () => {
          frame.contentWindow.postMessage(message(func), '*');
        };
      };
    };

    const frameCommand = execCommand(this.frame);

    const configControl = (vc: HTMLElement) => {
      const func: any = vc.getAttribute('data-func');
      const handler = frameCommand(func);
      vc.tabIndex = 0;
      this.renderer.listen(vc, 'click', handler);
    };

    this.controls.forEach(configControl);

    const autoplayCommand = frameCommand('playVideo');
    autoplayCommand();
  }

  isModalOpen = false;
  options = [
    {
      id: 1,
      img: 'https://bjair-dev.github.io/lofi.old/dist/assets/img/station_thumb_jfKfPfyJRdk.gif',
      idytb: 'jfKfPfyJRdk',
      name: 'lofi hip hop radio - beats to relax/study to',
    },
    {
      id: 2,
      img: 'https://bjair-dev.github.io/lofi.old/dist/assets/img/station_thumb_e3L1PIY1pN8.gif',
      idytb: 'lP26UCnoH9s',
      name: 'coffee shop radio // 24/7 lofi hip-hop beats',
    },
    {
      id: 3,
      img: 'https://bjair-dev.github.io/lofi.old/dist/assets/img/station_thumb_MVPTGNGiI-4.gif',
      idytb: 'MVPTGNGiI-4',
      name: 'synthwave radio 🌌 - beats to chill/game to',
    },
    {
      id: 4,
      img: 'https://bjair-dev.github.io/lofi.old/dist/assets/img/station_thumb_rUxyKA_-grg.gif',
      idytb: 'rUxyKA_-grg',
      name: 'lofi hip hop radio - beats to sleep/chill to',
    },
    // Agrega más opciones según sea necesario
  ];
  selectedOption: number | null = null;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedOption = null;
    this.loading = false;
  }
  loading: any;
  selectOption(id: any) {
    this.selectedOption = id;
    this.namelofi = id.name;
    console.log(this.safeUrl);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id.idytb}?enablejsapi=1`
    );
    this.loading = true;
    console.log(this.safeUrl);
    setTimeout(() => {
      this.play();
      this.closeModal();
    }, 2000);
  }
  safeUrl: any;
  namelofi = 'lofi hip hop radio - beats to relax/study to';
  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.youtubeUrl
    );
    /*   this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.liveStreamUrl
    ); */
  }

  getFraseSemana(): string {
    const frases: string[] = [
      'El comienzo de un nuevo camino.',
      'La melancolía se desvanece en notas suaves.',
      'El amor se encuentra en los pequeños detalles.',
      'La belleza se encuentra en la simplicidad.',
      'Deja que tus sueños se conviertan en realidad.',
      'La calma se encuentra en el silencio interior.',
      'Descubre la magia en los momentos ordinarios.',
      'La música alimenta el alma y el corazón.',
      'El tiempo pasado no define tu futuro.',
      'Encuentra la paz en medio del caos.',
      'El arte es una expresión del corazón.',
      'Agradece las pequeñas cosas de la vida.',
      'Las palabras tienen el poder de sanar.',
      'Sigue tu intuición y confía en ti mismo.',
      'Las risas son el mejor remedio para el alma.',
      'Abraza la imperfección y aprende de ella.',
      'La creatividad florece en la libertad.',
      'Deja que tus pasiones te guíen hacia tus sueños.',
      'La naturaleza nos muestra la belleza de la vida.',
      'Las segundas oportunidades pueden cambiar tu mundo.',
      'El amor propio es la clave de la felicidad.',
      'El cambio es la puerta hacia el crecimiento.',
      'La gratitud transforma la vida cotidiana.',
      'Atrévete a ser diferente y sigue tu propio camino.',
      'El presente es el regalo más valioso que tenemos.',
      'El perdón libera el peso del pasado.',
      'La perseverancia lleva al éxito.',
      'La serenidad se encuentra en la aceptación.',
      'La empatía construye puentes entre las personas.',
      'Las palabras amables pueden iluminar el día de alguien.',
      'Deja que la música te lleve a lugares desconocidos.',
      'El aprendizaje es un viaje sin fin.',
      'La amistad verdadera es un tesoro invaluable.',
      'El optimismo es la clave para superar los desafíos.',
      'Las pequeñas acciones tienen un gran impacto.',
      'El equilibrio es la clave para una vida plena.',
      'La esperanza nos guía hacia un futuro mejor.',
      'El respeto y la tolerancia unen a las personas.',
      'La curiosidad nos impulsa a descubrir nuevas maravillas.',
      'La paciencia es una virtud que trae recompensas.',
      'Las experiencias nos enriquecen y nos transforman.',
      'El amor incondicional nutre el corazón.',
      'La vulnerabilidad nos conecta en un nivel más profundo.',
      'La alegría se encuentra en los momentos simples.',
      'La sinceridad fortalece los lazos humanos.',
      'Deja que la luz guíe tus pasos en la oscuridad.',
      'La autenticidad es la clave para encontrar tu voz.',
      'La belleza está en todas partes, solo debemos abrir los ojos.',
      'La resiliencia nos permite superar los desafíos más difíciles.',
      'La introspección nos lleva a un mayor autoconocimiento.',
      'El amor trasciende las barreras y une a las almas.',
      'El fin es solo el comienzo de algo nuevo.',
    ];

    const fechaActual: Date = new Date();
    const numeroSemana: number = this.getNumeroSemana(fechaActual);

    // Ajusta el número de semana para que esté dentro del rango válido (1 a 52)
    const indiceFrase: number = (numeroSemana - 1) % frases.length;

    return frases[indiceFrase];
  }

  getNumeroSemana(date: Date): number {
    const onejan: Date = new Date(date.getFullYear(), 0, 1);
    const millisecsInDay: number = 86400000;
    return Math.ceil(
      ((date.getTime() - onejan.getTime()) / millisecsInDay +
        onejan.getDay() +
        1) /
        7
    );
  }
}
