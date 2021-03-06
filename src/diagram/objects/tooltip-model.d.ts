import { Property, ChildProperty } from '@syncfusion/ej2-base';import { Tooltip, AnimationModel, Position, TooltipEventArgs } from '@syncfusion/ej2-popups';import { TooltipRelativeMode } from '../enum/enum';import { Diagram } from '../diagram';import { NodeModel } from './node-model';import { ConnectorModel } from './connector-model';

/**
 * Interface for a class DiagramTooltip
 */
export interface DiagramTooltipModel {

    /**
     * Defines the content of the Tooltip
     * @default ''
     */
    content?: string | HTMLElement;

    /**
     * Defines the position of the Tooltip
     * @default 'TopLeft'
     */
    position?: Position;

    /**
     * Defines the relative mode of the Tooltip
     * @default 'Mouse'
     */
    relativeMode?: TooltipRelativeMode;

    /**
     * Defines if the Tooltip has tip pointer or not
     * @default true
     */
    showTipPointer?: boolean;

    /**
     * Sets the width of the Tooltip
     * @default 'auto'
     */
    width?: number | string;

    /**
     * Sets the height of the Tooltip
     * @default 'auto'
     */
    height?: number | string;

    /**
     * Allows to set the same or different animation option for the Tooltip, when it is opened or closed.
     * @aspDefaultValueIgnore
     * @default { open: { effect: 'FadeIn', duration: 150, delay: 0 }, close: { effect: 'FadeOut', duration: 150, delay: 0 } }
     */
    animation?: AnimationModel;

}