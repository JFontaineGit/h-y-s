import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface CategoriaLey {
  id: number;
  titulo: string;
  descripcion: string;
  expandido: boolean;
  detalles?: string[]; // Nuevo campo para detalles personalizados (puede ser cualquier tipo de dato según tus necesidades)
}

@Component({
  selector: 'app-leyes-seguridad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leyes.component.html',
  styleUrls: ['./leyes.component.scss'],
  animations: [
    trigger('expandirContraer', [
      state('contraido', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        padding: '0 16px'
      })),
      state('expandido', style({
        height: '*',
        overflow: 'hidden',
        opacity: '1',
        padding: '16px'
      })),
      transition('contraido <=> expandido', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class LeyesSeguridadComponent implements OnInit {
  public categoriasLeyes = signal<CategoriaLey[]>([
    {
      id: 1,
      titulo: '🧼 Ley 19.587 (1972) – Ley de Higiene y Seguridad en el Trabajo',
      descripcion: 'Promulgada el 21 de abril de 1972, esta ley marca un antes y un después en la protección de quienes laburan en Argentina. Su propósito es simple pero contundente: proteger la vida, la salud y la integridad psicofísica de cada trabajador, sin importar dónde o cómo trabaje. Esta norma va más allá de un listado de reglas; busca instaurar una verdadera cultura de prevención, donde no se espere a que pase algo grave para recién actuar. Algunos de sus pilares más importantes son:',
      expandido: false,
      detalles: [
        'Ámbito de aplicación: Aplica a todo tipo de establecimiento o actividad, sin importar si tiene fines de lucro, el tamaño de la empresa o las máquinas que se usen. Acá no se salva nadie: todos tienen que cumplirla.',
        'Medidas de higiene: Obliga a que los lugares de trabajo tengan condiciones dignas. Hablamos de ventilación adecuada, temperatura controlada, buena iluminación, y límites claros en el ruido, vibraciones y contaminación (ya sea física, química o biológica). Nada de trabajar en una cueva o en un sauna.',
        'Medidas de seguridad: Va desde la protección de las máquinas hasta la correcta identificación de sustancias peligrosas. También exige señalizar bien los riesgos, evitar incendios y asegurar la estructura de los espacios.',
        'Obligaciones del empleador: El que da trabajo tiene que hacerse cargo. Debe mantener equipos, entregar elementos de protección personal (EPP), y garantizar que el ambiente de trabajo no sea una trampa mortal. No es un favor: es una obligación.',
        'Esta ley fue reglamentada por el Decreto 351/79, que baja a tierra los aspectos técnicos y dice cómo aplicar todo esto en la práctica.'
      ]
    },
    {
      id: 2,
      titulo: '🔐 Ley 24.557 (1995) – Ley de Riesgos del Trabajo (LRT)',
      descripcion: 'Sancionada el 13 de septiembre de 1995, esta ley llega para darle estructura y sistema a la protección laboral. Ya no alcanza con prevenir: también hay que saber cómo responder cuando las cosas salen mal. La LRT pone en marcha un sistema nacional de prevención y reparación, y se apoya en tres pilares:',
      expandido: false,
      detalles: [
        'Prevención: Se siguen promoviendo medidas para evitar accidentes y enfermedades laborales, reafirmando lo que ya decía la Ley 19.587, pero ahora con una red más organizada.',
        'Aseguradoras de Riesgos del Trabajo (ART): Todo empleador debe estar afiliado a una ART o autoasegurarse. Estas aseguradoras se encargan de cubrir los gastos médicos y compensaciones cuando ocurre un accidente laboral o se detecta una enfermedad profesional.',
        'Reparación: Regula cómo y cuánto se compensa a un trabajador que se accidentó o enfermó por causas laborales. Incluye atención médica, rehabilitación, indemnizaciones, y la obligación de reincorporarlo si puede volver.',
        'Denuncia obligatoria: Si hay un accidente o enfermedad laboral, el empleador está obligado a notificarlo a la ART y a la Superintendencia de Riesgos del Trabajo (SRT). Tapar o esconder cosas no es una opción.',
        'Esta ley fue reglamentada por el Decreto 170/96 y reforzada por el Decreto 1338/96, que detalla el rol de los servicios de medicina laboral y de higiene y seguridad.'
      ]
    },
    {
      id: 3,
      titulo: '⚖️ Ley 26.773 (2012) – Ordenamiento de la Reparación de Daños Derivados de Accidentes de Trabajo',
      descripcion: 'Sancionada el 24 de octubre de 2012, esta ley aparece para equilibrar la balanza a favor del trabajador. Viene a corregir falencias del sistema anterior y garantizar que las víctimas de accidentes o enfermedades laborales reciban una compensación más justa y humana. Sus puntos fuertes:',
      expandido: false,
      detalles: [
        'Indemnización integral: El trabajador ya no queda atado al sistema de la ART. Puede optar por seguir ese camino o iniciar una demanda civil bajo el Código Civil y Comercial. Esto amplía sus derechos y le da más herramientas para reclamar lo que le corresponde.',
        'Actualización de montos: Nada de indemnizaciones congeladas. Los montos tienen que ajustarse por inflación o cambios salariales, asegurando que el dinero que reciba el trabajador realmente tenga valor y no sea una pichurria.',
        'Prevención reafirmada: Si bien se centra en la reparación, no se olvida de lo preventivo. Recalca que prevenir sigue siendo la mejor herramienta, y que el empleador no puede relajarse con eso',
     ]
    },
  ]);

  constructor() {}

  ngOnInit(): void {
  }

  public toggleCategoria(categoriaId: number): void {
    this.categoriasLeyes.update(categorias => 
      categorias.map(categoria => 
        categoria.id === categoriaId 
          ? { ...categoria, expandido: !categoria.expandido } 
          : categoria
      )
    );
  }

  public obtenerEstadoAnimacion(expandido: boolean): string {
    return expandido ? 'expandido' : 'contraido';
  }
}