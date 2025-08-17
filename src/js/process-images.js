import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'src/images/original';
const outputDir = 'src/images/processed';

const resizeMap = {
	512: 0.6,
	1024: 0.75,
	1920: 1
};

const additionalFormats = ['avif', 'webp'];

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const run = async () => {
	const files = fs.readdirSync(inputDir).filter(file => /\.(jpe?g|png)$/i.test(file));

	for (const file of files) {
		const inputPath = path.join(inputDir, file);
		const baseName = path.basename(file, path.extname(file));

		const metadata = await sharp(inputPath).metadata();
		const originalWidth = metadata.width;

		for (const [label, scale] of Object.entries(resizeMap)) {
			const targetWidth = Math.round(originalWidth * scale);
			const image = sharp(inputPath).resize({ width: targetWidth });

			for (const format of additionalFormats) {
				const outputPath = path.join(outputDir, `${baseName}-${label}.${format}`);
				await image.toFormat(format).toFile(outputPath);
				console.log(`✅ Created: ${outputPath}`);
			}
		}
	}
};

run();
