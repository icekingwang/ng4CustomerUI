# ng4CustomerUI

blockUI 使用实例     1.<p-blockUI [blocked]="blockedDocument"></p-blockUI>

                    2.<p-blockUI [target]="pnl" [blocked]="blockedPanel">
                        <i class="fa fa-lock fa-5x" style="position:absolute;top:25%;left:50%"></i>
                     </p-blockUI>
                     
pButton 使用实例
                1.<button type="button" pButton icon="fa fa-chevron-up" (click)="openPrev()"></button>
                
                2.<button pButton type="button" (click)="count()" label="Success" class="ui-button-success"></button>
                
accordion 使用实例
       <div style="margin-bottom: 1em">
              <button type="button" pButton icon="fa fa-chevron-up" (click)="openPrev()"></button>
              <button type="button" pButton icon="fa fa-chevron-down" (click)="openNext()"></button>
          </div>
              
          <p-accordion [activeIndex]="index">
              <p-accordionTab header="Godfather I">
                  The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
              </p-accordionTab>
              <p-accordionTab header="Godfather II">
                  Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
              </p-accordionTab>
              <p-accordionTab header="Godfather III">
                  After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
              </p-accordionTab>
              <p-accordionTab header="Godfather IV">
                  After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
              </p-accordionTab>
          </p-accordion>
