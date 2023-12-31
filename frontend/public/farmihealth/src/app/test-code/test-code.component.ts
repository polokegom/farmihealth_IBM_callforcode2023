import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-test-code',
  templateUrl: './test-code.component.html',
  styleUrls: ['./test-code.component.css']
})
export class TestCodeComponent implements OnInit {
  @ViewChild('svgContainer', { static: true }) svgContainer!: ElementRef;

  private dragging = false;
  private drawing = false;
  private startPoint!: [number, number];
  private points: [number, number][] = [];
  private g: any;
  private dragger: any;
  private counter: any = 0;

  constructor() { }

  ngOnInit(): void {
    const svgContainer = this.svgContainer.nativeElement;
    const svg = d3.select(svgContainer)
      .attr('height', 1000)
      .attr('width', 1000);

    this.dragger = d3.drag()
      .on('drag', this.handleDrag)
      .on('end', () => {
        this.dragging = false;
      });

    svg.on('mouseup', () => {
      if (this.dragging) return;
      this.drawing = true;
      const [x, y] = d3.mouse(svgContainer);
      this.startPoint = [x, y];
      if (svg.select('g.drawPoly').empty()) this.g = svg.append('g').attr('class', 'drawPoly');
      if (d3.event.target.hasAttribute('is-handle')) {
        this.closePolygon();
        return;
      }
      this.points.push([x, y]);
      this.g.select('polyline').remove();
      const polyline = this.g.append('polyline').attr('points', this.points)
        .style('fill', 'none')
        .attr('stroke', '#000');
      for (let i = 0; i < this.points.length; i++) {
        this.g.append('circle')
          .attr('cx', this.points[i][0])
          .attr('cy', this.points[i][1])
          .attr('r', 4)
          .attr('fill', 'grey')
          .attr('stroke', '#000')
          .attr('is-handle', 'true')
          .style('cursor', 'pointer');
      }
    });

    svg.on('mousemove', () => {
      if (!this.drawing) return;
      const g = d3.select('g.drawPoly');
      g.select('line').remove();
      const line = g.append('line')
        .attr('x1', this.startPoint[0])
        .attr('y1', this.startPoint[1])
        .attr('x2', d3.mouse(svgContainer)[0] + 2)
        .attr('y2', d3.mouse(svgContainer)[1])
        .attr('stroke', 'grey')
        .attr('stroke-width', 1);
    });
  }

  closePolygon() {
    const svgContainer = this.svgContainer.nativeElement;
    const svg = d3.select(svgContainer);

    svg.select('g.drawPoly').remove();
    const g = svg.append('g');
    g.append('polygon')
    .attr('fill-opacity', 0.5)
    .attr('stroke', 'grey')
    .attr('points', this.points.map(point => point.join(',')).join(' '))
    .style('fill', "red");
    for (let i = 0; i < this.points.length; i++) {
      const circle = g.selectAll('circles')
        .data([this.points[i]])
        .enter()
        .append('circle')
        .attr('cx', this.points[i][0])
        .attr('cy', this.points[i][1])
        .attr('r', 4)
        .attr('fill', 'grey')
        .attr('stroke', '#000')
        .attr('is-handle', 'true')
        .attr('fill-opacity', 0.5)
        .style('cursor', 'move')
        .call(this.dragger);
    }
    this.points.splice(0);
    this.drawing = false;
    alert("Closed window")
  }

  handleDrag = () => {
    if (this.drawing) return;
   /* const dragCircle = d3.select(d3.event.sourceEvent.target);
    const newPoints: any = [];
    this.dragging = true;
    const poly = d3.select(dragCircle.node().parentNode).select('polygon');
    const circles = d3.select(dragCircle.node().parentNode).selectAll('circle') as d3.Selection<SVGCircleElement, any, any, any>;
    this.counter++;
    dragCircle
      .attr('cx', d3.event.x)
      .attr('cy', d3.event.y);
    
    for (let i = 0; i < circles.nodes().length; i++) {

      var circle = d3.select<SVGCircleElement, unknown>(circles.nodes()[i]);
    
      newPoints.push([circle.attr('cx')!, circle.attr('cy')!]);
    }

    poly.attr('points', newPoints);
   */
  }

 
}

