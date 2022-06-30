import React from "react";
import dynamic from "next/dynamic";


const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {ssr: false});

const DoublePendulum = () => {
	function sketch(p5) {
		p5.setup = () => {
			p5.createCanvas(400, 400);
		}

		const m = 1;
		const l = 60;
		const gr = -9.81;
		let init = [Math.PI/2, Math.PI/2, 0, 0];
		let poses1 = [];
		let poses2 = [];

		p5.draw = () => {
			p5.background(220);

			init = RK4(init);

			const t1 = init[0];
			const t2 = init[1];
			let x1 = l * Math.sin(t1) + 200;
			let y1 = -l * Math.cos(t1) + 200;
			poses1.push({x1, y1});

			let x2 = l * Math.sin(t2) + x1;
			let y2 = -l * Math.cos(t2) + y1;
			poses2.push({x2, y2});

			if (poses1.length > 50) poses1.shift();
			if (poses2.length > 100) poses2.shift();

			for (let p = 0; p < poses1.length - 1; p++) {
				p5.stroke(p5.color(255, 0, 0, 100));
				p5.line(poses1[p].x1, poses1[p].y1, poses1[p+1].x1, poses1[p+1].y1);
			}

			for (let p = 0; p < poses2.length - 1; p++) {
				p5.stroke(p5.color(0, 0, 255, 100));
				p5.line(poses2[p].x2, poses2[p].y2, poses2[p+1].x2, poses2[p+1].y2);
			}

			p5.stroke(p5.color(0, 0, 0, 255));
			p5.line(200, 200, x1, y1);
			p5.fill(p5.color(255, 0, 0, 255));
			p5.circle(x1, y1, 10);
			p5.line(x1, y1, x2, y2);
			p5.fill(p5.color(0, 0, 255, 255));
			p5.circle(x2, y2, 10);
		}

		function f(t1, t2, p1, p2) {
			return 6/(m*l*l) * (2 * p1 - 3*Math.cos(t1 - t2) * p2)/(16 - 9*Math.cos(t1 - t2)*Math.cos(t1 - t2));
		}

		function g(t1, t2, p1, p2) {
			return 6/(m*l*l) * (8 * p2 - 3*Math.cos(t1 - t2) * p1)/(16 - 9*Math.cos(t1 - t2)*Math.cos(t1 - t2));
		}

		function j(t1, t2, p1, p2) {
			return -0.5*m*l*l * (f(t1, t2, p1, p2)*g(t1, t2, p1, p2)*Math.sin(t1 - t2) + 3*gr/l*Math.sin(t1));
		}

		function k(t1, t2, p1, p2) {
			return -0.5*m*l*l * (-1*f(t1, t2, p1, p2)*g(t1, t2, p1, p2)*Math.sin(t1 - t2) + gr/l*Math.sin(t2));
		}

		function RK4(init) {
			const t1 = init[0];
			const t2 = init[1];
			const p1 = init[2];
			const p2 = init[3];

			const h = 0.08;

			const k0 = h*f(t1, t2, p1, p2);
			const l0 = h*g(t1, t2, p1, p2);
			const m0 = h*j(t1, t2, p1, p2);
			const n0 = h*k(t1, t2, p1, p2);

			const k1 = h*f(t1 + 0.5*k0, t2 + 0.5*l0, p1 + 0.5*m0, p2 + 0.5*n0);
			const l1 = h*g(t1 + 0.5*k0, t2 + 0.5*l0, p1 + 0.5*m0, p2 + 0.5*n0);
			const m1 = h*j(t1 + 0.5*k0, t2 + 0.5*l0, p1 + 0.5*m0, p2 + 0.5*n0);
			const n1 = h*k(t1 + 0.5*k0, t2 + 0.5*l0, p1 + 0.5*m0, p2 + 0.5*n0);

			const k2 = h*f(t1 + 0.5*k1, t2 + 0.5*l1, p1 + 0.5*m1, p2 + 0.5*n1);
			const l2 = h*g(t1 + 0.5*k1, t2 + 0.5*l1, p1 + 0.5*m1, p2 + 0.5*n1);
			const m2 = h*j(t1 + 0.5*k1, t2 + 0.5*l1, p1 + 0.5*m1, p2 + 0.5*n1);
			const n2 = h*k(t1 + 0.5*k1, t2 + 0.5*l1, p1 + 0.5*m1, p2 + 0.5*n1);

			const k3 = h*f(t1 + k2, t2 + l2, p1 + m2, p2 + n2);
			const l3 = h*g(t1 + k2, t2 + l2, p1 + m2, p2 + n2);
			const m3 = h*j(t1 + k2, t2 + l2, p1 + m2, p2 + n2);
			const n3 = h*k(t1 + k2, t2 + l2, p1 + m2, p2 + n2);

			const nt1 = t1 + 1/6 * (k0 + 2*k1 + 2*k2 + k3);
			const nt2 = t2 + 1/6 * (l0 + 2*l1 + 2*l2 + l3);
			const np1 = p1 + 1/6 * (m0 + 2*m1 + 2*m2 + m3);
			const np2 = p2 + 1/6 * (n0 + 2*n1 + 2*n2 + n3);

			return [nt1, nt2, np1, np2];
		}
	}

	return (
		<div style={{display: 'flex', justifyContent: 'center'}}>
			<ReactP5Wrapper sketch={sketch} />
		</div>
	);

}

export default DoublePendulum;
