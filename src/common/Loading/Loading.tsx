import React, { useEffect, useRef, useState } from 'react';

const PandaAnim: React.FC = () => {
    const [frames, setFrames] = useState<string[]>([]);
    const svgRef = useRef<SVGSVGElement | null>(null);
    const interval = 100

    useEffect(() => {
        // importing frames
        const loadFrames = async () => {
            try {
                const context = import.meta.glob('../../assets/pandaLoadingAnimation/*.svg');
                const paths = Object.keys(context);

                const imports = await Promise.all(
                    paths.map(path => context[path]() as Promise<{ default: string }>)
                );

                const svgPaths = imports.map((module) => module.default);
                setFrames(svgPaths);

            } catch (error) {
                console.error('Error loading frames:', error);
            }
        };

        loadFrames().catch(error => console.error(error));  // Обработка rejected Promise
    }, []);

    useEffect(() => {
        if (frames.length === 0) return;

        let currentFrame = 0;
        const totalFrames = frames.length;

        const animate = () => {
            if (svgRef.current) {
                currentFrame = (currentFrame + 1) % totalFrames;
                const currentFrameElement = svgRef.current;
                if (currentFrameElement && frames[currentFrame]) {
                    fetch(frames[currentFrame])
                        .then(response => response.text())
                        .then(svgContent => {
                            currentFrameElement.innerHTML = svgContent;
                        })
                        .catch(error => console.error('Error fetching SVG content:', error));

                    setTimeout(animate, interval);
                } else {
                    console.log("Current frame element not found.");
                }
            } else {
                console.log("SVG reference is not available.");
            }
        };

        animate();
    }, [frames]);

    return (
        <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="700" height="700">
            {frames.length > 0 && <use id="current-frame" xlinkHref={frames[0]} />}
        </svg>
    );
};

export default PandaAnim;
