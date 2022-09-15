import { useEffect, useRef } from 'react';

export const usePencil = (onDraw) => {
    const canvasRef = useRef(null);
    const isDrawingRef = useRef(false);
    const prevPointRef = useRef(null);

    const mouseMoveListenerRef = useRef(null);
    const mouseDownListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);

    const setCanvasRef = (ref) => {
        if(!ref) return;
        if (canvasRef.current) {
            canvasRef.current.removeEventListener(
                'mousedown',
                mouseDownListenerRef.current
            );
        }
        initMouseDownListener();
        canvasRef.current = ref;
    };

    const initMouseDownListener = () => {
        if (!canvasRef.current) return;
        const listener = () => {
            isDrawingRef.current = true;
        };
        mouseDownListenerRef.current = listener;
        canvasRef.current.addEventListener('mousedown', listener);
    }

    useEffect(() => {
        const computePointInCanvas = (clientX, clientY) => {
            if (!canvasRef.current) {
                return null;
            }
            const boundingRect = canvasRef.current.getBoundingClientRect();
            
            return {
                x: clientX - boundingRect.left,
                y: clientY - boundingRect.top,
            };
        };

        const initMouseMoveListener = () => {
            const listener = (e) => {
                if (!isDrawingRef.current || !canvasRef.current) return;
                const point = computePointInCanvas(e.clientX, e.clientY);
                const ctx = canvasRef.current.getContext('2d');
                if (onDraw) onDraw(ctx, point, prevPointRef.current);
                prevPointRef.current = point;
                console.log(point);
            };
            mouseMoveListenerRef.current = listener;
            window.addEventListener('mousemove', listener);
        };

        const initMouseUpListener = () => {
            const listener = () => {
                isDrawingRef.current = false;
                prevPointRef.current = null;
            };
            mouseUpListenerRef.current = listener;
            window.addEventListener('mouseup', listener);
        };

        const removeListeners = () => {
            if (mouseMoveListenerRef.current)
                window.removeEventListener(
                    'mousemove',
                    mouseMoveListenerRef.current
                );
            if (mouseUpListenerRef.current)
                window.removeEventListener(
                    'mouseup',
                    mouseUpListenerRef.current
                );
        };

        initMouseMoveListener();
        initMouseUpListener();
        return () => {
            removeListeners();
        };
    }, [onDraw]);

    return { setCanvasRef };
};

export const useStraight = (onDraw) => {
    const canvasRef = useRef(null);
    const isDrawingRef = useRef(false);
    const prevPointRef = useRef(null);

    const mouseMoveListenerRef = useRef(null);
    const mouseDownListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);

    const setCanvasRef = (ref) => {
        if(!ref) return;
        if (canvasRef.current) {
            canvasRef.current.removeEventListener(
                'mousedown',
                mouseDownListenerRef.current
            );
        }
        initMouseDownListener();
        canvasRef.current = ref;
    };

    const initMouseDownListener = () => {
        if (!canvasRef.current) return;
        const listener = () => {
            isDrawingRef.current = true;
        };
        mouseDownListenerRef.current = listener;
        canvasRef.current.addEventListener('mousedown', listener);
    }

    useEffect(() => {
        const computePointInCanvas = (clientX, clientY) => {
            if (!canvasRef.current) {
                return null;
            }
            const boundingRect = canvasRef.current.getBoundingClientRect();
            
            return {
                x: clientX - boundingRect.left,
                y: clientY - boundingRect.top,
            };
        };

        const initMouseMoveListener = () => {
            const listener = (e) => {
                if (!isDrawingRef.current || !canvasRef.current) return;
                const point = computePointInCanvas(e.clientX, e.clientY);
                const ctx = canvasRef.current.getContext('2d');
                if (onDraw) onDraw(ctx, point, prevPointRef.current);
                prevPointRef.current = point;
                console.log(point);
            };
            mouseMoveListenerRef.current = listener;
            window.addEventListener('mousemove', listener);
        };

        const initMouseUpListener = () => {
            const listener = () => {
                isDrawingRef.current = false;
                prevPointRef.current = null;
            };
            mouseUpListenerRef.current = listener;
            window.addEventListener('mouseup', listener);
        };

        const removeListeners = () => {
            if (mouseMoveListenerRef.current)
                window.removeEventListener(
                    'mousemove',
                    mouseMoveListenerRef.current
                );
            if (mouseUpListenerRef.current)
                window.removeEventListener(
                    'mouseup',
                    mouseUpListenerRef.current
                );
        };

        initMouseMoveListener();
        initMouseUpListener();
        return () => {
            removeListeners();
        };
    }, [onDraw]);

    return { setCanvasRef };
};
