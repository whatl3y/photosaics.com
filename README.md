# [photosaics.com](https://photosaics.com) Website

## Original Template

https://github.com/BlackrockDigital/startbootstrap-grayscale

## Deployment

photosaics.com is deployed to AWS S3 as a static site. Use the
following instructions to deploy after changes are made.

### macOS

1. Make sure AWS CLI is installed via [Homebrew](https://brew.sh/)
    - `brew install awscli`
2. After changes are made, build files to `dist` directory
    - `npm run build`
3. `aws s3 cp --recursive dist s3://photosaics.com`
4. Clear cloudfront distribution cache (via UI today, TODO instructions via CLI)
